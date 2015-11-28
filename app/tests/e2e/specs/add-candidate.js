describe('Candidate List', function() {
    browser.get('http://localhost:8000');

    element(by.model('candidate_name')).sendKeys('Gaurav');
    element(by.id('add-candidate')).click();

    it("Reset the input box value for name", function(){
        var candidateName = element(by.model('candidate_name')).getAttribute("value");
        expect(candidateName).toEqual("");        
    })

    it("Increase the length of original list by 1", function(){
        var candidateList = element.all(by.repeater('candidate in candidates'));
        expect(candidateList.count()).toEqual(1);
    })

    it("Have the same value of name as was inserted using the input box in the first place", function(){
        var lastCandidateInsertedName = element.all(by.repeater('candidate in candidates').
                                                    row(0));
        // Wanted this to be identified by .row.column() but somehow that was not working. Need to re-work on that.
        expect(lastCandidateInsertedName.getText()).toContain('Gaurav');
    })
});