import React from 'react';
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, withStyles } from "@material-ui/core";
import useForm from './useForm';

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 230
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    Fullname: '',
    Mobile: '',
    Email: '',
    Age: 0,
    BloodGroup: '',
    Address: '',
}

const DonationCandidateForm = ({ classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = {};

        if ('Fullname' in fieldValues) {
            temp.Fullname = values.Fullname ? '' : 'This field is required.';
        }

        if ('Mobile' in fieldValues) {
            temp.Mobile = values.Mobile ? '' : 'This field is required.';
        }

        if ('BloodGroup' in fieldValues) {
            temp.BloodGroup = values.BloodGroup ? '' : 'This field is required.';
        }

        if ('Email' in fieldValues) {
            temp.Email = (/^$|.+@.+..+/).test(values.Email) ? '' : 'Email is not valid';
        }

        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === '');
        }
    }

    const { values, setValues, errors, setErrors, handleInputChange } = useForm(initialFieldValues);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            window.alert('validation succeeded');
        }
    }

    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="Fullname"
                        required
                        variant="outlined"
                        label="Full Name"
                        value={values.Fullname}
                        onChange={handleInputChange}
                        {...(errors.Fullname && { error: true, helperText: errors.Fullname })}
                    />
                    <TextField
                        name="Email"
                        variant="outlined"
                        label="Email"
                        value={values.Email}
                        onChange={handleInputChange}
                        {...(errors.Email && { error: true, helperText: errors.Email })}
                    />
                    <FormControl required variant="outlined"
                        className={classes.formControl}
                        {...(errors.BloodGroup && { error: true })}
                    >
                        <InputLabel ref={inputLabel}>Blood Group</InputLabel>
                        <Select
                            name="BloodGroup"
                            values={values.BloodGroup}
                            onChange={handleInputChange}
                        >
                            <MenuItem value="">Select Blood Group</MenuItem>
                            <MenuItem value="A+">A+</MenuItem>
                            <MenuItem value="A-">A-</MenuItem>
                            <MenuItem value="B+">B+</MenuItem>
                            <MenuItem value="B-">B-</MenuItem>
                            <MenuItem value="AB+">AB+</MenuItem>
                            <MenuItem value="AB-">AB-</MenuItem>
                            <MenuItem value="O+">O+</MenuItem>
                            <MenuItem value="O-">O-</MenuItem>
                        </Select>
                        {errors.BloodGroup && <FormHelperText>{errors.BloodGroup}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        name="Mobile"
                        required
                        variant="outlined"
                        label="Mobile"
                        value={values.Mobile}
                        onChange={handleInputChange}
                        {...(errors.Mobile && { error: true, helperText: errors.Mobile })}
                    />
                    <TextField
                        name="Age"
                        variant="outlined"
                        type="number"
                        label="Age"
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={values.Age}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="Address"
                        variant="outlined"
                        label="Address"
                        value={values.Address}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            className={classes.smMargin}
                        >
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>)
}

export default withStyles(styles)(DonationCandidateForm);
