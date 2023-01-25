import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import {
  Button,
  Item,
  Edit,
  FormEl,
  FlexWrapper,
  Span,
  Label,
  Input,
  OkBtn,
  DeleteBtn,
} from './ContactItem.styled';
import { ReactComponent as Pencil } from '../ContactItem/pencil.svg';
import { ReactComponent as Good } from '../ContactItem/good.svg';
import { ReactComponent as Delete } from '../ContactItem/delete.svg';

export default function ContactItem({ contact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value)
      }

  const handleEditSubmit = e => {
    e.preventDefault();
    const editedContact = {
      id: contact.id,
      name: name || contact.name,
      number: number || contact.umber
    }
    dispatch(updateContact(editedContact));
    // setName('');
    // setNumber('')
    setIsOpen(false)
  };

  return (
    <div>
      <Item>
        <p>
          {contact.name}: {contact.number}
        </p>
        <DeleteBtn type="button" onClick={() => handleRemove(contact.id)}>
        <Delete/>
        </DeleteBtn>

        <Edit type="button" onClick={() => setIsOpen(prev => !prev)}>
          <Pencil />
        </Edit>
      </Item>

      {isOpen && (
        <FormEl onSubmit={handleEditSubmit}>
          <FlexWrapper>
            <Label>
              <Input type="text" placeholder=" " value={name} name="name" 
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" onChange={handleNameChange}/>
              <Span>Name:</Span>
            </Label>

            <Label>
              <Input type="tel" placeholder=" " value={number} name="number" 
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"onChange={handleNumberChange}/>
              <Span>Number:</Span>
            </Label>
          </FlexWrapper>
          <OkBtn type="submit"><Good /></OkBtn>
        </FormEl>
      )}
    </div>
  );
}
