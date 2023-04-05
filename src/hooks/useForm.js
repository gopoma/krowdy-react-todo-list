import { useState } from "react";

export default function useForm(initialFormState) {
  const [formState, setFormState] = useState(initialFormState);

  const _handleChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return {
    ...formState,
    formState,
    _handleChange
  };
}
