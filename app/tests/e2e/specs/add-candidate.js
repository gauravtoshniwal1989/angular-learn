describe('Candidate List Page', function() {
    browser.get('http://localhost:8000');

    // var candidatesListOriginal = element.all(by.repeater('candidate in candidate_list.candidates'));
    var add_candidate_name = "Gaurav";

    describe("Adding data", function() {
        
        beforeEach(function() {
            element(by.model('candidate_list.candidate_name')).sendKeys(add_candidate_name);
            element(by.id('add-candidate')).click();        
        })
    
        it("Reset the input box value for name", function(){
            var candidateName = element(by.model('candidate_list.candidate_name')).getAttribute("value");
            expect(candidateName).toEqual("");
        })
        
        /*
        This is an inappropriate test, since with each test, it excecutes the addition of data and it does not make sense to compare the count before the execution of this test vs after the execution
        it("Clicking on Save Increase the length of original list by 1", function(){
            var candidateList = element.all(by.repeater('candidate in candidate_list.candidates'));
            candidatesListOriginal.then(function(candidatesListOriginal) {
                expect(candidateList.count()).toEqual(candidatesListOriginal.length+1);
            })
        })
        */

        it("Saving a name saves the value of name as was inserted using the input box", function(){
            var lastCandidateInsertedName = element.all(by.repeater('candidate in candidate_list.candidates').
                                                        row(0).column("candidate.name"));
            // Select by repeater is given here: http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.repeater
            // First Instance: Wanted this to be identified by .row.column() but somehow that was not working. Need to re-work on that.
            // Then it got working, so basically the concept is that element.all returns a promise, that prolly resolves itself if given inside the expect block or should be resolved as an actual promise.
            // So, the next line is true
            expect(lastCandidateInsertedName.getText()).toContain(add_candidate_name);
            // And the next one as well
            lastCandidateInsertedName.then(function(nameElementArray) {
                expect(nameElementArray[0].getText()).toEqual(add_candidate_name);
            })
        })
    })

    describe("Navigate to the details page", function() {
        var clicked_name; // In this describe namespace so that it can be accessed even after the redirections
        it("Clicking on a name should navigate to the details page", function(){
            // expect(browser.isElementPresent(candidate_name_element)).toBe(true);
            var candidate_name_element = element.all(by.repeater('candidate in candidate_list.candidates').
                                                        row(0).column("candidate.name"));
            candidate_name_element.then(function(name) {
                clicked_name = name[0].getText()
                name[0].click().then(function() {
                    // The following line returned error that the element is no longer attached to the DOM, since the browser had already redirected by then
                    // clicked_name = name[0].getText()
                    expect(browser.getCurrentUrl()).toMatch(/\/#\/details\/(\d+)$/);                    
                });
            });
        });

        it("Should show the details page with the name of the clicked element of the list in an input box", function() {
            var nameElement = element(by.model('candidate_detail.candidate.name'));
            expect(nameElement.getAttribute("value")).toEqual(clicked_name);
        })

        it("Should save the new value of name from the details page and reflect the same in the list", function() {
            var nameElement = element(by.model('candidate_detail.candidate.name'));
            nameElement.sendKeys("Toshniwal");
            element(by.id("save_name")).click().then(function(){
                expect(browser.getCurrentUrl()).toMatch(/\/#\/$/);
                var changedCandidateName = element.all(by.repeater('candidate in candidate_list.candidates').
                                                            row(0).column("candidate.name"));
                changedCandidateName.then(function(nameElementArray) {
                    expect(nameElementArray[0].getText()).toEqual("GauravToshniwal");
                })
            });
        })
    })
});