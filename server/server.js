/**
 * Created by garie on 12/10/2015.
 */
Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
    bucket: Meteor.settings.bucket,
    acl: Meteor.settings.acl,
    AWSAccessKeyId: Meteor.settings.AWSAccessKeyId,
    AWSSecretAccessKey: Meteor.settings.AWSSecretAccessKey,
    region: Meteor.settings.region,

    authorize: function () {
        //Deny uploads if user is not logged in.
        //if (!this.userId) {
        //    var message = "Please login before posting files";
        //    throw new Meteor.Error("Login Required", message);
        //}
        console.log('authorized');
        return true;
    },

    key: function (file) {
        //Store file into a directory by the user's username.
        //var user = Meteor.users.findOne(this.userId);
        //var wish = Meteor.wishes._id;
        //console.log(wish);
        return Date.now().toString();
    }
});