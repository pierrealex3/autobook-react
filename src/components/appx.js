import React from 'react'

const myVehicles = [ 
    {
        id: 123,
        make: "BMW",
        model: "X3 M40i",
        year: 2018,
    },
    {
        id: 456,
        make: "Audi",
        model: "TT Roadster",
        year: 2016
    }
]

export default class FilterableVehicleEventList extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedVehicle: ''
        }

        this.handleVehicleSelected = this.handleVehicleSelected.bind(this);
    }

    handleVehicleSelected(vehicle) {
        this.setState( {
            selectedVehicle: vehicle
        })
    }

    render() {
        return (
            <div>
                <VehicleSelector
                onVehicleSelected = {this.handleVehicleSelected}
                 />
                <VehicleEventList
                selectedVehicle = {this.state.selectedVehicle}
                />
            </div>
        );
    }
}

class VehicleSelector extends React.Component {

    constructor() {
        super()
        this.handleVehicleSelectClick = this.handleVehicleSelectClick.bind(this);
    }

    handleVehicleSelectClick(e) {
        this.props.onVehicleSelected(e.target.name);
    }

    render() {

        let vehiclesToSelectDivList = [];

        myVehicles.forEach( vehicle => {
            vehiclesToSelectDivList.push(
            <div>
                <input 
                name={vehicle.id}
                type={'button'} 
                value={vehicle.make}
                onClick={this.handleVehicleSelectClick}
                />
            </div>);
        })

        return (
            <div>{vehiclesToSelectDivList}</div>
        );
    }
}

class VehicleEventList extends React.Component {
   
    constructor(props) {
        super(props);
    }


    render() {

        const EVENTS = [
            {
                id: 123,
                vehicle: 'BMW X3 M40i',
                category: 'ToDo',
                title: 'Achat de pneus d\'été'
            },
            {
                id: 456,
                vehicle: 'Audi TT',
                category: 'Event',
                title: 'Manque de prestone' }
        ];

        const vehicleEventArray = [];

        EVENTS.forEach( (event) => {       

            if (this.props.selectedVehicle == "" || event.id == this.props.selectedVehicle ) {
              vehicleEventArray.push(
              <VehicleEvent 
              vehicle={event.vehicle}
              category={event.category}
              title={event.title} />
              )
            }
        }
        );

        return(
            <div>{vehicleEventArray}</div>

        );

    }
}

class VehicleEvent extends React.Component {

    render() {

        const stackedDiv = [];

        const vehicle = this.props.vehicle;
        const category = this.props.category;
        const title = this.props.title;

        stackedDiv.push(<div>{vehicle}</div>);
        stackedDiv.push(<div>{category}</div>);
        stackedDiv.push(<div>{title}</div>);

        return (
            <div style={{borderStyle: 'dotted'}}>{stackedDiv}</div>
        );
    }
}


