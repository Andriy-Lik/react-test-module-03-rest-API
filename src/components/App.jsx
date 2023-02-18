import { Component } from "react";
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import * as API from '../services/api'


export class App extends Component {
  state ={
    materials: [],
    isLoading: false
  };

  addMaterial = async values => {
    try {
      this.setState({isLoading: true})
      const material = await API.addMaterial(values);
      this.setState(state => ({ 
        materials: [...state.materials, material],
        isLoading: false, 
      }));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { isLoading } = this.state;
    return (
      <>
        {isLoading && <div>LOADING</div>}
        <MaterialEditorForm onSubmit={this.addMaterial} />
      </>
    );
  }
}