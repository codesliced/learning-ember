  <script type="text/x-handlebars" id="post/_edit">
    <p>{{input type="text" value=title}}</p>
    <p>{{input type="text" value=excerpt}}</p>
    <p>{{textarea value=body}}</p>
  </script>


//this one works

  <script type="text/x-handlebars" id="post">
  <h1>{{title}}</h1>
  <h2>by {{author.name}} <small class="muted">({{date}})</small></h2>

  <hr>

  <div class="intro">
    {{excerpt}}
  </div>

  <div class="body">
    {{body}}
  </div>

  </script>

///




<script type="text/x-handlebars" id="post">
  {{#if isEditing}}
    {{partial 'post/edit'}}
    <button {{action 'doneEditing'}}Done</button>
    {{else}}
    <button {{action 'edit'}}Edit</button>
    {{if}}

  <h1>{{title}}</h1>
  <h2>by {{author.name}} <small class="muted">({{date}})</small></h2>

  <hr>

  <div class="intro">
    {{excerpt}}
  </div>

  <div class="below-the-fold">
    {{body}}
  </div>
  </script>



/* use this with fixture data not API JSON */

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});


  var posts =[{
	id: '1',
	title: "How to eat cake",
	author: {name: 'homesliced'},
	date: new Date('3-4-2013'),
	excerpt: "cardigan hoodie actually ethical authentic freegan wolf",
	body: "Single-origin coffee tumblr jean shorts fashion axe salvia Carles, narwhal tote bag +1 Odd Future Austin before they sold out. Trust fund Banksy Truffaut, selvage gluten-free meggings umami PBR chambray hashtag. Synth cray biodiesel, mlkshk deep v keffiyeh bicycle rights meh cornhole 8-bit salvia. Mixtape banh mi Etsy DIY, cardigan hoodie actually ethical authentic freegan wolf raw denim yr blue bottle vegan. Marfa narwhal thundercats photo booth occupy, 90's art party Vice. Typewriter pork belly plaid irony organic fanny pack leggings deep v roof party. Twee sriracha Brooklyn tote bag sartorial."
}, {
	id: '2',
	title: "How to use a spoon and fork",
	author: {name: 'codesliced'},
	date: new Date('3-4-2013'),
	excerpt: "Toffee icing croissant candy canes macaroon.",
	body: "Wafer chupa chups candy tart croissant muffin faworki jujubes. Fruitcake brownie gummi bears sweet roll. Icing ice cream jelly. Brownie marshmallow lollipop chocolate cake cotton candy apple pie tart jelly beans. Toffee icing croissant candy canes macaroon. Tiramisu chocolate cake sweet roll marzipan jelly-o sugar plum sweet roll toffee dessert. Oat cake jelly cotton candy faworki apple pie. Chocolate bar chocolate liquorice wafer. Wafer jujubes dessert danish."
}];



http://api.tumblr.com/v2/blog/codesliced.tumblr.com/posts?api_key=JgMKxs9sb1a4lGWMM7dVzd5UaQ8MtO32QaVXj45AZQfwjBh7bB


http://blog.annamarie.me/api/get_recent_posts/




App.PostsRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('http://api.tumblr.com/v2/blog/codesliced.tumblr.com/posts?api_key=JgMKxs9sb1a4lGWMM7dVzd5UaQ8MtO32QaVXj45AZQfwjBh7bB?callback=?').then(function(data){
      return data.posts.map(function(post) {
        post.body = post.content;
        return post;
      });
    });
  }
});


App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return $.getJSON('http://api.tumblr.com/v2/blog/codesliced.tumblr.com/posts/?id='+params.post_id+'&api_key=JgMKxs9sb1a4lGWMM7dVzd5UaQ8MtO32QaVXj45AZQfwjBh7bB&callback=?').then(function(data){
      data.post.body = data.post.content;
      return data.post;
    });
  }
});