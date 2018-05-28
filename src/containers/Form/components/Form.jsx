import React from 'react';

export default () => (
  <section>
    <div>
      <div>Email</div>
      <span>{'props.coname'}</span>
      <div>Fill out the form below and {'props.coname'} will get in touch</div>
      <form>

        <label htmlFor="name">
          <input
            type="text"
            name="name"
          />
          <span></span>
          {'name'}
        </label>

        <label htmlFor="phone">
          <input
            type="text"
            name="phone"
          />
          <span></span>
          {'Phone number'}
        </label>

        <label htmlFor="email">
          <input
            type="text"
            name="email"
          />
          <span></span>
          {'Email address'}
        </label>

        <label htmlFor="comments">
          <input
            type="textarea"
            name="comments"
          />
          <span></span>
          {'Comments or questions'}
        </label>

        <label htmlFor="yes">
          <input
            type="checkbox"
            name="yes"
          />
          <span></span>
          {'Yes'}
        </label>

        <label htmlFor="no">
          <input
            type="checkbox"
            name="no"
          />
          <span></span>
          {'No'}
        </label>
      </form>

    </div>

    <div>
      <button>Send</button>
    </div>

  </section>
);
