exports.checkLogin = function(req,res,next){
    if(!req.session.user){
        req.flash('error','未登陆');
        return res.redirect('/usrs/login');
    }
    next();
}

exports.checkNotLogin = function(req,res,next){
    if(req.session.user){
        req.flash('error','已登陆');
        return res.redirect('back');
    }
    next();
}