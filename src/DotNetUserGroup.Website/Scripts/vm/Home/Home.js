(function() {

  $(function() {
    ko.applyBindings(new EventsViewModel(), document.getElementById('events'));
    ko.applyBindings(new TopicsViewModel(), document.getElementById('topics'));
    ko.applyBindings(new NewsViewModel(3), document.getElementById('news'));
    return ko.applyBindings(new NextEventViewModel(), document.getElementById('next-event'));
  });

}).call(this);
