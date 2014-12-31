/**
 * *@info: Apply 数据实体
 *  @author: coverGuo
 *  @date: 2014-12-30
 */


var _ = require('underscore')._;

/**
 * status 0 审核中 , 1 通过  , 2 不通过
 * @param args
 * @constructor
 */
var Apply = function (args){
    if(!args){
        return ;
    }
    _.defaults( this ,  _.pick(args , 'userName' ,'name' , 'appCode' , 'status' , 'id' , 'approves' , 'mailSender' , 'mailCopy' , 'description' , 'createTime' , 'passTime' , 'consumeIp') );
}


Apply.prototype  = {
    userName : undefined,
    name : undefined,
    url : undefined,
    status : undefined,
    id : undefined,
    mail : undefined,
    description : undefined,
    createTime : undefined,
    passTime : undefined
}

module.exports =  Apply;