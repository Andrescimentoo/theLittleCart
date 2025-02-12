import express from "express"

const app = express()
const PORT = 3000


try {
    app.listen(PORT,() => {
        console.log("server started!")
    })
} catch (error) {
    console.log("error to iniciate server!", error)
}
