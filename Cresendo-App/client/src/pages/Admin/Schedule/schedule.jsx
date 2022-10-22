import styles from './style.css'

const Schedule = () => {
    return (
        <div class="container ">
            <form action="" id="survey-form" />
            <div class="form-group">
                <label for="name">Name Of The Event:</label>
                <input type="text" name="name" id="name" class="formControl" placeholder="Enter the event name" required />
            </div>
            <div class="form-group">
                <label for="appt">Select a time for the Event:</label>
                <input type="time" id="appt" name="appt" placeholder="Enter the time for the event" required />
            </div>
            <div class="form-group">
                <label for="date">Select a date for the Event:</label>
                <input type="date" id="date" name="date" placeholder="Enter the date of the event" required />
                <div class="form-group">
                    <label for="quantity">Enter the First Price Money:</label>
                    <input type="number" id="quantity" name="quantity" placeholder="1st Price Money" required />
                </div>
                <div class="form-group">
                    <label for="quantity">Enter the Second Price Money:</label>
                    <input type="number" id="quantity" name="quantity" placeholder="2nd Price Money" required />
                </div>
                <div class="form-group">
                    <button type="submit" id="submit" class="btn">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Schedule;