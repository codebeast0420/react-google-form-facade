import FormfacadeEmbed from "@formfacade/embed-react"
import './App.css';

function App() {
 
  return (
    <div className="App" style={{ height: "100vh" }}>
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/115148271254267255558/form/1FAIpQLSfcZX2GdbTSGf5m1-XaxVSpBL113rAPR0mGRm8amVVDmBee7w/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log('Form submitted')}
      />
    </div>
  );
}

export default App;
