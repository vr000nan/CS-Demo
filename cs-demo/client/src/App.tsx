import './App.css'; 
import ListOfUsers from './components/ListOfUsers';
import CreateUser from './components/CreateUser';
import UpdatePassword from './components/UpdatePassword';
import UpdateUser from './components/UpdateUser';

function MainComponent() {
    return (
        <div className="layoutContainer">
            <ListOfUsers />
            <div>
                <CreateUser />
                <UpdatePassword />
                <UpdateUser/>
            </div>
        </div>
    );
}

export default MainComponent;