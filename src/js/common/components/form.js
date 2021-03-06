import {PropTypes} from 'react';
import Component from 'common/component';

class Form extends Component {
  render() {
    return (
      <form {...this.props} onSubmit={this.submit.bind(this)}
        autoComplete="off">
        {this.props.children}
      </form>
    );
  }

  submit(...args) {
    args[0].preventDefault();
    this.props.onSubmit(...args);
  }
}

Form.propTypes = {
  children: PropTypes.element.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
