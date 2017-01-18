Template.Recipes.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }
});

Template.Recipes.events({
    'click .new-recipe': () => {
        Session.set('newRecipe', true);
    }
});

Template.Recipes.events({
    'click .fa-close': function() {
        Session.set('newRecipe', false);
    }
});