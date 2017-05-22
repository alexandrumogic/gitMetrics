var dirPath = "./test/electron/.git"
var nodegit = require('nodegit');
var path = require('path');

// Variables declaration
var commitCommit = null;
var commitAuthor = null;
var commitDate = null;
var commitMessage = null;

var arrayOfCommits;

function commitObject() {
  this.commit = null;
  this.author = null;
  this.date = null;
  this.message = null;
}

function getRepositoryHistory() {
  return new Promise(function(resolve) {
    return nodegit.Repository.open(path.resolve(__dirname, "../../../zurvan/.git"))
    .then(function(repo) {
      return repo.getMasterCommit();
    })
    .then(function(firstCommitOnMaster){
      // History returns an event.
      var history = firstCommitOnMaster.history(nodegit.Revwalk.SORT.Time);

      arrayOfCommits = [];

      // History emits "commit" event for each commit in the branch's history
      history.on("commit", function(commit) {

        commitCommit = commit.sha();
        commitAuthor = commit.author().name();
        commitDate = commit.date();
        commitMessage = commit.message();

        console.log("commit " + commitCommit);
        console.log("Author:", commitAuthor);
        console.log("Date:", commitDate);
        console.log("\n    " + commitMessage);

        var newCommitObject = new commitObject();
        newCommitObject.commit = commitCommit;
        newCommitObject.author = commitAuthor;
        newCommitObject.date = commitDate;
        newCommitObject.message = commitMessage;

        arrayOfCommits.push(newCommitObject);

      });

      history.on("end", function() {
        resolve(arrayOfCommits);
      })

      // Don't forget to call `start()`!
      history.start();
    });
  })
};

// getRepositoryHistory().then(function() {
//   console.log("=>>>>>>>>>>");
// })

module.exports.getRepositoryHistory = getRepositoryHistory;
