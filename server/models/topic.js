var MyAppModel = require('../db/index')

var Topic = new MyAppModel({tableName:'topics'})

exports.all = (req, res) => {
    Topic.query(
        'SELECT tp.id AS tpID, tp.title , tp.vote, tp.publish_at, ct.id AS ctID, ct.body, us.id as usID, us.username,'+
        '(SELECT COUNT(*) FROM replies rl WHERE rl.topic_id = tp.id) AS totalReplies'+
        'FROM topics tp, contents ct, users us'+
        'WHERE tp.id = ct.topic_id AND tp.user_id = us.id'
        ,(err, res) => {
            if(err)
                return err
            res.send(rows)
        }
    )
}