/**
 * Component definition for the <%= dasherizedModuleName %> component
 */

<% if (pro) { %>// <%} else { %><% } %>import computed, {readOnly} from 'ember-computed-decorators'
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'

import layout from '<%= templatePath %>'

export default Component.extend({
  // == Dependencies ==========================================================

  // == Keyword Properties ====================================================

  layout,

  // == PropTypes =============================================================
<% if (pro) { %><% } else { %>
  /**
   * Properties for this component. Options are expected to be (potentially)
   * passed in to the component. State properties are *not* expected to be
   * passed in/overwritten.
   */<% } %>
  propTypes: {
    // options
    foo: PropTypes.string

    // callbacks

    // state
  },
<% if (pro) { %><% } else { %>
  /** @returns {Object} the default property values when not provided by consumer */<% } %>
  getDefaultProps () {
    return {
      // options

      // callbacks

      // state
    }
  },

  // == Computed Properties ===================================================
<% if (pro) { %><% } else { %>
  @readOnly
  @computed('css')
  /**
   * A pretty silly computed property just as an example of one
   * it appends '-' to the css base
   *
   * NOTE: this computed property is only here as an examle and should be removed/replaced with a real one
   *
   * @param {String} css - the base css class for this component (the component name)
   * @returns {String} a css prefix suitable for use within the template
   */
  cssPrefix (css) {
    return `${css}-`
  },
<% } %>
  // == Functions =============================================================

  // == DOM Events ============================================================

  // == Lifecycle Hooks =======================================================

  // == Actions ===============================================================

  actions: {
  }
})
