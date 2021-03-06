import { useFormik } from 'formik';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import LocalizedTextField from '@commercetools-uikit/localized-text-field';
import TextField from '@commercetools-uikit/text-field';
import PrimaryButton from '@commercetools-uikit/primary-button';
import SecondaryButton from '@commercetools-uikit/secondary-button';
import Spacings from '@commercetools-uikit/spacings';
// import validate from './validate';

const DemoForm = (props) => {
  const dataLocale = useApplicationContext((context) => context.dataLocale);
  const formik = useFormik({
    // Pass initial values from the parent component.
    initialValues: props.initialValues,
    // Handle form submission in the parent component.
    onSubmit: props.onSubmit,
    enableReinitialize: true,
  });

  const formElements = (
    <Spacings.Stack scale="l">
      <LocalizedTextField
        name="name"
        title="Name"
        isRequired
        selectedLanguage={dataLocale}
        value={formik.values.name}
        errors={
          LocalizedTextField.toFieldErrors(formik.errors).name
        }
        touched={formik.touched.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        name="key"
        title="Key"
        isRequired
        value={formik.values.key}
        errors={
          TextField.toFieldErrors(formik.errors).key
        }
        touched={formik.touched.key}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </Spacings.Stack>
  );

  return props.children({
    formElements,
    isDirty: formik.dirty,
    isSubmitting: formik.isSubmitting,
    submitForm: formik.handleSubmit,
    handleCancel: formik.handleReset,
  });
}
export default DemoForm;