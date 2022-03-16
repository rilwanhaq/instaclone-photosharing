import React from "react";
import './addData.css'

export default function AddData(){
    return(
        <div>
            <form>
                <input type='file' ></input><br></br>
                <input type='text' placeholder="Author"></input>
                <input type='text' placeholder='Location'></input><br></br>
                <input type='text' placeholder="Description"></input><br></br>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}