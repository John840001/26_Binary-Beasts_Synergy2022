import styles from './schedule.module.css'

const Schedule = () => {
  return (
    <div class="header_fixed">
      <h1>Crescendo schedule</h1>
      <table>        
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Time</th>
            <th>1st Prize Money</th>
            <th>2nd Prize Money</th>

             <th>Action</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Inaugration</td>
            <td>10th November,2022</td>
            <td>9:00 AM</td>
            <td>---</td>
            <td>---</td>
            <td>---</td>
          </tr>
          <tr>
            <td>Valorant</td>
            <td>10th November,2022</td>
            <td>10:30AM</td>
            <td>5000/-</td>
            <td>2500</td>
             <td><button>View</button></td> 
          </tr>
          <tr>
            <td>Unlock this co.</td>
            <td>10th November,2022</td>
            <td>10:00AM</td>
            <td>1000/-</td>
            <td>800/-</td>

             <td><button>View</button></td> 
          </tr>
          <tr>
            <td>Neon Theme pac man</td>
            <td>10th November,2022</td>
            <td>10:00AM</td>
            <td>800/-</td>
            <td>600/-</td>
             <td><button>View</button></td> 
          </tr>
          <tr>
            <td>Zoo tic</td>
            <td>11th November,2022</td>
            <td>11:00AM</td>
            <td>900/-</td>
            <td>700/-</td>
             <td><button>View</button></td> 
          </tr>
          <tr>
            <td>Nerf Battle</td>
            <td>11th November,2022</td>
            <td>11:00AM</td>
            <td>950/-</td>
            <td>750/-</td>

             <td><button>View</button></td> 
          </tr>
          <tr>
            <td>Laser maze</td>
            <td>13th November,2022</td>
            <td>11:00AM</td>
            <td>600/-</td>
            <td>500/-</td>
             <td><button>View</button></td> 
          </tr>

          <tr>
            <td>Trivia</td>
            <td>13th November,2022</td>
            <td>11:00AM</td>
            <td>600/-</td>
            <td>500/-</td>
             <td><button>View</button></td> 
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Schedule
