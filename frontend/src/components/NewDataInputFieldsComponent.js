import React from 'react';
import SaveDataButtonComponent from './SaveDataButtonComponent';

const NewDataInputFieldsComponent = (props) => {
  //order
  //returns inputs for ordering new section titles children
  const letSetOrder = () => {
    if (props.isSectionTitle){
      return (
        <span>
          Place after section:
          <select onChange={e => props.onChangeNumber(e)} onFocus={e => props.onChangeNumber(e)} value={props.inputFields.section_order} name='section_order'>
            <option value='0'>(place first)</option>
            {props.section_titles.map(x => <option key={'id=' + x.id + '-project_id=' + x.project_id + '-name=' + x.name} value={x.id}>{x.name}</option>)}
          </select>
        </span>
      );
    } else {
      return (
        <span>
          Place in section:
          <select onChange={e => props.onChangeNumber(e)} onFocus={e => props.onChangeNumber(e)} value={props.inputFields.section_title} name='section_title'>
            {props.section_titles.map(x => <option key={'id=' + x.id + '-project_id=' + x.project_id + '-name=' + x.name} value={x.id}>{x.name}</option>)}
          </select>
          Place after data:
          <select onChange={e => props.onChangeNumber(e)} onFocus={e => props.onChangeNumber(e)} value={props.inputFields.child_order} name='child_order'>
            <option value='0'>(place first)</option>
            {props.section_titles.map(x => <option key={'id=' + x.id + '-project_id=' + x.project_id + '-name=' + x.name} value={x.id}>{x.name}</option>)}
          </select>
        </span>
      );
    }
  }
  // const titles = props.state.project.section_titles.map(title => <SectionTitleComponent title={title} />)
  return (

    <div id={props.inputFields.names.divIdInput}>
      <label>
      <div>Name</div>
      <input name='name' value={props.inputFields.name} onChange={e => props.onChange(e)} />
      </label>
      <label>
      <div>Description</div>
      <textarea name='description' value={props.inputFields.description} onChange={e => props.onChange(e)}></textarea>
      </label><br />
      {letSetOrder()}
      <SaveDataButtonComponent click={props.click} />
    </div>

  )
}

export default NewDataInputFieldsComponent;
