const router = require("express").Router();
const {TrainerModel} = require("./../Data/Trainers.js")

router.get("/getAll", (req, res) => {
    TrainerModel.find({}).then(ts => {
        res.status(200).json(ts)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})

// router.get("/getOne", (req, res) => {
//     TrainerModel.find({}).then(ts => {
//         res.status(200).json(ts)
//     }).catch((err)=> {
//         res.status(500).json(err)
//     })
// })

router.post("/create", (req, res) => {
    TrainerModel.create(req.body).then(t => {
        res.status(200).json(t)
    }).catch((err)=> {
        res.status(500).json(err)
    })

    // new TrainerModel(req.body).save(t=>{
    //     res.status(200).json(t)
    // }).catch((err)=> {
    //     res.status(500).json(err)
    // })
})
 
router.put("/update", (req, res) => {
    TrainerModel.updateOne({_id:req.body._id}, req.body).then(t =>{
        res.status(200).json(t)
    }).catch((err)=> {
        res.status(500).json(err)
    })
})

router.delete("/delete", (req, res) => {
     TrainerModel.deleteOne({_id:req.body._id}).then(r => {
        res.status(200).json(r)
     }).catch((err) => {
        res.status(500).json(err)
     })
})


module.exports = router; 