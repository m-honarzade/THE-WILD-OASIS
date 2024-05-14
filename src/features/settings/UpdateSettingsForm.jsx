import styled from "styled-components";
import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSettings from "./useSettings";
import Spinner from "../../ui/Spinner";
import useEditSettings from "./useEditSettings";
const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
const Label = styled.label`
  font-weight: 500;
`;

function UpdateSettingsForm() {
  const {
    settingData: {
      minBookingLength,
      maxBookingLength,
      maxGusetPerBooking,
      breakfestPrice,
    } = {},
    isLoading,
  } = useSettings();

  const { isEditing, editSetting } = useEditSettings();

  const updateHandler = (e, fieldName) => {
    const { value } = e.target;
    if (!value) return;
    editSetting({ [fieldName]: value });
  };

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow>
        <Label htmlFor="min-nights">Minimum nights/booking</Label>
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isEditing}
          onBlur={(e) => updateHandler(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="max-nights">Maximum nights/booking</Label>
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isEditing}
          onBlur={(e) => updateHandler(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="max-guests">Maximum guests/booking</Label>
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGusetPerBooking}
          disabled={isEditing}
          onBlur={(e) => updateHandler(e, "maxGusetPerBooking")}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="breakfast-price">Breakfast price</Label>
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfestPrice}
          disabled={isEditing}
          onBlur={(e) => updateHandler(e, "breakfestPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
