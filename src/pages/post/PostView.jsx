import React from 'react';
import PropTypes from 'prop-types';
import GrowCard from "./Card"
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  post_contain: {
    
  },
  postCard: {
    display: 'inline-block',
    maxWidth: "450px",
    padding: "5vw",
    margin: "5vw",
		textAlign: 'center',
	},
	paymentCard: {
    display: 'inline-block',
    maxWidth: "450px",
    margin: "5vw",
		textAlign: 'center',
  },
  textField: {
		margin: "20px auto ",
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  card_container: {
    display: "inline-block",
    maxWidth: "450px",
  },
  posted: {
    margin: "5vw"
  }
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Post extends React.Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
			<div className={classes.post_contain}>
  			<Card className={classes.postCard}>
          <TextField
            name="name"
            id="outlined-name"
            label="依頼元"
            className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
  					variant="outlined"
  					fullWidth
          />
          <TextField
            id="outlined-contents"
            label="内容"
            defaultValue="foo"
            className={classes.textField}
            onChange={this.handleChange('name')}
            margin="normal"
  					variant="outlined"
  					fullWidth
          />

          <TextField
            id="outlined-multiline-static"
            label="詳細"
            multiline
            rows="4"
            defaultValue="Default Value"
            className={classes.textField}
            margin="normal"
  					variant="outlined"
  					fullWidth
          />

          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
  					variant="outlined"
  					fullWidth
          />

          <TextField
            id="outlined-with-placeholder"
            label="With placeholder"
            placeholder="Placeholder"
            className={classes.textField}
            margin="normal"
  					variant="outlined"
  					fullWidth
          />

          <TextField
            id="outlined-number"
            label="Number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
  					variant="outlined"
  					fullWidth
          />

          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
  					variant="outlined"
  					fullWidth
          />

          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency-native"
            select
            label="Native select"
            className={classes.textField}
            value={this.state.currency}
            onChange={this.handleChange('currency')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            id="outlined-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="outlined-bare"
            className={classes.textField}
            defaultValue="Bare"
            margin="normal"
            variant="outlined"
          />
  				</Card>

  				<Card className={classes.paymentCard}>
  				<TextField
            id="outlined-payment"
            label="お支払い"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
  					variant="outlined"
  					fullWidth
          />

          <TextField
            id="outlined-payment-multiline-static"
            label="お支払い詳細"
            multiline
            rows="4"
            defaultValue="Default Value"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />  
  				</Card>
          <div className={classes.card_container}>
            <Typography variant="h4">カードの確認</Typography>
            <GrowCard
              className={classes.posted}
              name={this.state.name} 
              rewards={this.state.name}
              photoURL={this.state.name} 
            />
          </div>
				</div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);