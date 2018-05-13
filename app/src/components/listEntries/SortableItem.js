import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

import Toggle from '../toggle';
import EditEntry from '../editEntry';
import DragHandle from './DragHandle';

const SortableItem = SortableElement(({item, deleteBulletin, refreshList, toggleActive}) => {
  return (
    <div className="table-row">
      <div className="bulletin-drag-handle"><DragHandle/></div>
      <div className="bulletin-id">{item.id}</div>
      <div className="bulletin-title">{item.title}</div>
      <div className="bulletin-owner">{item.owner}</div>
      <div className="bulletin-duration">{item.duration}</div>
      <div className="bulletin-url"><a href={item.url}>{item.url}</a></div>
      <div className="bulletin-toggle"><Toggle active={item.active} toggleActive={() => toggleActive(item.id)}/></div>      
      <div className="bulletin-actions">
        <EditEntry item={item} refreshList={refreshList}/>
        <i className="icon ion-trash-b"
          onClick={() => {deleteBulletin(item.id);}}
        ></i>
      </div>
    </div>
  );
});

export default SortableItem;
