import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { postOrder } from 'store/api-actions';

const BookingModal = ({onModalClose}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeopleCount] = useState(null);
  const [isLegal, setIsLegal] = useState(false);

  const order = {
    name: name,
    peopleCount: peopleCount,
    phone: phone,
    isLegal: isLegal,
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handlePeopleCountChange = (evt) => {
    setPeopleCount(+evt.target.value);
  };

  const handlePhoneChange = (evt) => {
    setPhone(evt.target.value);
  };

  const handleIsLegalChange = (evt) => {
    setIsLegal(evt.target.checked)
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postOrder(order));
    onModalClose();
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onModalClose}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              onChange={handleNameChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              onChange={handlePhoneChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              onChange={handlePeopleCountChange}
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              onChange={handleIsLegalChange}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
