import React from 'react';
import './Groups.scss';
import { FaEllipsis } from 'react-icons/fa6';
// import MaskGroup from '../../assets/Mask Group.png';
import { useDispatch } from 'react-redux';
import { getGroups, getGroupsError, getGroupsStatus, selectAllGroups } from './groupSlice';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AddGroup from './addGroup';
import Modal from '../../components/Modal/Modal';
import '../../pages/Timeline/Addpost.scss';

const Groups = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectAllGroups);
  const status = useSelector(getGroupsStatus);
  const error = useSelector(getGroupsError);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };



  console.log(groups)
  useEffect(() => {
    if (status === 'idle') {
        dispatch(getGroups());
    }
    console.log(getGroups)
  }, [status, dispatch]);

  return (
    <div className='groups-container'>
      <div className='group-header-wrapper'>
        <div className='group-header'>
          <span>Groups</span>
        </div>

        <div className='create-new-group-btn'>
          <button onClick={openModal}>+ Create New Group</button>
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <AddGroup closeGroup={closeModal} />
            </Modal>
          )}
        </div>

        <div className='search-input-wrapper'>
          <input type='search' name='' id='' placeholder='search for groups' />
        </div>
      </div>

      <div className='suggested-for-you-wrapper'>
       
        <div className='suggested'>
          <span>Suggested for you</span>
          <span>Groups you might be interested </span>
        </div>
        <span>See All</span>
        {Array.isArray(groups) &&
          groups.map((group) => (
            
            <div className='group-card' key={group.group_id}>
              <div className='group-name'>
                <div className='group-icon'>
                  <span>{group.icon}</span> {/* Assuming 'icon' property exists in your group object */}
                </div>
                <div className='group-details'>
                  <span>{group.group_name}</span> {/* Assuming 'name' property exists in your group object */}
                  <span>{group.group_description}</span> {/* Assuming 'location' property exists in your group object */}
                </div>
                <FaEllipsis />
              </div>
              <div className='group-image'>
                <img src={group.image} alt='' /> {/* Assuming 'image' property exists in your group object */}
              </div>
              <div className='join-group-btn'>
                <span>Join group</span>
              </div>
            </div>
          ))}
      </div>

      <div className='recent-activity'></div>
    </div>
  );
};

export default Groups;
