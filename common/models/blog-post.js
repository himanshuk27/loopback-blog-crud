'use strict';

module.exports = function(Blogpost) {

	Blogpost.remoteMethod(  
  'publish',
  {
    http: {path: '/:id/publish', verb: 'put'},
    accepts: {arg: 'id', type: 'string', required: true, http: { source: 'path' }},
    returns: {root: true, type: 'object'},
    description: 'Marks a blog as published.'
  }
);

  Blogpost.beforeRemote('upvote', function(ctx, user, next) {

    Blogpost.findById(id, function(err, record){
      //only author can write to thier post
    if (record.authorId != ctx.req.accessToken.userId) {
      var err = new Error("Only Author can publish/update their post!");
      err.status = 403;
      next(err);    
    }  else {
      next();
    }
  })

  });

Blogpost.publish = function(id, cb) {  
  Blogpost.findById(id, function(err, record){
    record.updateAttributes({postdate: new Date()}, function(err, instance) {
      if (err) cb(err);
      if (!err) cb(null, instance);
    })
  })
};

};
