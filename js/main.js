var urls = {
  'rawMarkdown': 'https://raw.githubusercontent.com/' + config.user + '/' + config.repository + '/master/' + config.fileToRender,
  'commitsApiRequestUrl': 'https://api.github.com/repos/' + config.user + '/' + config.repository + '/commits?path=' + config.fileToRender 
};


var retrieveContentAndDisplay = function(){
  $.ajax({
    url: urls.rawMarkdown,
    success: function(data) {
      var converter   = new showdown.Converter(),
          html        = converter.makeHtml(data);
      $('.main-content').append(html);
    }
  })
}

var retrieveCommits = function() {
  $.ajax({
    url: urls.commitsApiRequestUrl,
    success: function(data){
      $.each(data, function(index, value) {
        var date = moment(value.commit.author.date).format('MMMM Do YYYY, h:mm:ss a');
        $('.commit-history-list').append('<li><span class="commit-message">' + value.commit.message + '</span> | <span class="commit-date">' + date + '</span> | <a href="'+ value.html_url + '" title="See what changed" target="_blank">👁</a></li>');
      });  
    }
  })
}


$(function() {
  retrieveContentAndDisplay();
  retrieveCommits();
});