import "../css/TextFields.css";

const TextFields = ({setTitleValue}) => {
    const clear = () => {
        document.getElementById("placeholder-text").classList.add("hidden");
    }

    const setTitle = (e) => {
        clear();
       setTitleValue(e.target.value);
    }

    const setSize = (e) => {
        clear();
        document.getElementById("outline").classList.remove("hidden");
        const numOfGuests = parseInt(e.currentTarget.value);
        const g = document.getElementById("guests");
        const a = document.getElementById("advice");
        if(numOfGuests < 0){
            g.innerHTML = "Party Size: Nonexistent";
            a.innerHTML = "That's probably not physically possible.";
        }
        else if(numOfGuests === 0 || numOfGuests === '' || isNaN(numOfGuests)){
            g.innerHTML = "Party Size: No Party";
            a.innerHTML = "At least you won't have to do any work.";
        }
        else if(numOfGuests <= 3){
            g.innerHTML = "Party Size: Tiny";
            a.innerHTML = "You may want a few more people. There won't be much suspense if there's only one or two options for a potential killer.";
        }
        else if(numOfGuests <= 6){
            g.innerHTML = "Party Size: Small and Intimate";
            a.innerHTML = "With this size, the characters can be detailed and personalized to your guests.";
        }
        else if(numOfGuests < 11){
            g.innerHTML = "Party Size: Moderate";
            a.innerHTML = "You should be able to create a diverse cast of characters while also ensuring they're all developed with " + numOfGuests + " guests";
        }
        else if(numOfGuests < 18){
            g.innerHTML = "Party Size: Large";
            a.innerHTML = "Keep the plot simple and the clues relatively obvious. It's a good idea to enlist help from your participants in developing their characters, to ensure all of them are comparably developed.";
        }
        else{
            g.innerHTML = "Party Size: Extra Large";
            a.innerHTML = "You may want to consider shortening the guest list a bit, it'll be difficult to convey the details with this many guests and plot points.";
        }
    }

    return (
        <div id="small-questions">
            <p>Party title: <input id="title-text" type="text" onChange={setTitle}/></p>
            <p>Number of guests: <input id="guests-num" onChange = {setSize} type="number"/></p>
        </div>
    )
}


export default TextFields;