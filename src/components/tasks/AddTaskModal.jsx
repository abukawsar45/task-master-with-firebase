import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import { useAddTaskMutation } from '../../redux/features/tasks/taskApi';
// import { useAddTaskMutation } from '../../redux/features/api/baseApi';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const [addTask, { data, error }] = useAddTaskMutation();
  // console.log(addTask);
  console.log(data);
  // console.log(error);

  const onSubmit = (data) => {
    console.log(data);
    addTask({...data, status: 'pending'});
    onCancel();
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-5'>
          <label htmlFor='title'>Title</label>
          <input
            className='w-full rounded-lg'
            type='text'
            {...register('title')}
            id=''
          />
        </div>

        <div className='flex flex-col mb-5'>
          <label htmlFor='description' className='mb-2'>
            Description
          </label>
          <textarea
            id='description'
            cols='5'
            rows='3'
            {...register('description')}
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='deadline' className='mb-2'>
            Deadline
          </label>
          {/* <input type='date' defaultValue={new Date()} id='date' {...register('date')} /> */}
          <input
            type='date'
            defaultValue={new Date().toISOString().substr(0, 10)}
            id='date'
            {...register('date')}
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='Author' className='mb-2'>
            Assign to
          </label>
          <select
            className='w-full rounded-lg'
            id='assignedTo'
            {...register('assignedTo')}
          >
            <option defaultValue='Abu Kaw Sar'>Abu Kaw Sar</option>
            <option value='Rasel'>Rasel</option>
            <option value='Mostofa'>Mostofa</option>
            <option value='Ibrahim'>Ibrahim</option>
            <option value='Shohel'>Shohel</option>
            <option value='Shohid'>Shohid</option>
            <option value='Kayes'>Kayes</option>
            <option value='Imran'>Imran</option>
            <option value='Ershad'>Ershad</option>
          </select>
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='title' className='mb-2'>
            Priority
          </label>
          <select
            className='w-full rounded-lg'
            id='priority'
            {...register('priority')}
          >
            <option defaultValue='high'>High</option>
            <option value='mdedium'>Medium</option>
            <option value='low'>Low</option>
          </select>
        </div>
        <div className='flex gap-3 justify-end'>
          <button
            onClick={() => onCancel()}
            type='button'
            className='btn btn-danger'
          >
            Cancel
          </button>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
