import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RIEInput, RIETextArea } from 'riek';
import * as actions from '../../store/actions/index';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Spinner from '../../components/ui/Spinner/Spinner';

export class JargonItem extends Component {
    constructor(props){
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
        this.deleteButtonClicked = this.deleteButtonClicked.bind(this);
        this.saveButtonClicked = this.saveButtonClicked.bind(this);
        this.state = {
          isDisabled: true, // this will be initialState in reducer
          editClicked: false, // this will be initialState in reducer
          editActive: false
        }
    }

    componentDidMount () {
        if(this.props.isAuthenticated){
            setState({
                isDisabled: false,
                editClicked: true,
                editActive: true
            })
        }
    }

    cancelButtonClicked = () => {
        setState({
            editActive: false
        });
    }
    
    saveButtonClicked = () => {
        confirmToSave();
    }

    confirmToSave = () => {
        confirmAlert({
          title: 'Confirm edit',
          message: 'Are you happy with your changes?',
          childrenElement: () => <div>Custom UI</div>,
          confirmLabel: 'Confirm',
          cancelLabel: 'Cancel',
          onConfirm: () => this.props.onJargonSaved(),
          onCancel: {}
        });
    };
    confirmToDelete = () => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure you want to delete?',
          childrenElement: () => <div>Custom UI</div>,
          confirmLabel: 'Confirm',
          cancelLabel: 'Cancel',
          onConfirm: () => this.props.onJargonDeleted(),
          onCancel: {}
        })
    };
    dataChanged = () => {
        setState({
            editActive: true
        })
    }

    render () {

        let jargon = this.props.error ? <p>Jargons can't be loaded!</p> : <Spinner />;

        return (
            <div>
                <RIEInput
                    value={this.props.textjargon}
                    change={this.dataChanged}
                    propName="text"
                    className={this.state.editClicked && this.state.editActive ? "editable" : ""}
                    isDisabled={this.state.isDisabled} />
                <RIETextArea
                    value={this.props.textareajargon}
                    change={this.dataChanged}
                    propName="textarea"
                    className={this.state.editClicked && this.state.editActive ? "editable" : ""}
                    isDisabled={this.state.isDisabled} />
                <div className="jargon-buttons">
                    <button onClick={this.deleteClicked}>delete</button>
                    <div className="edit-buttons">
                        <button onClick={this.saveButtonClicked}>save</button>
                        <button onClick={this.cancelButtonClicked}>cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onJargonAdded: (jargName) => dispatch(actions.addJargon(jargName)),
        onJargonDeleted: (jargName) => dispatch(actions.deleteJargon(jargName)),
        onJargonSaved: (jargName) => dispatch(actions.jargonSaved(jargName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JargonItem);
