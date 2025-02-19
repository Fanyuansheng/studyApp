import { VantComponent } from '../common/component';
import { button } from '../mixins/button';
import { link } from '../mixins/link';

VantComponent({
  classes: ['icon-class', 'text-class'],

  mixins: [link, button],

  props: {
    text: String,
    dot: Boolean,
    info: String,
    icon: String,
    color: String,
    classPrefix: {
      type: String,
      value: 'van-icon',
    },
    disabled: Boolean,
    loading: Boolean,
  },

  methods: {
    onClick(event: WechatMiniprogram.CustomEvent) {
      this.$emit('click', event.detail);
      this.jumpLink();
    },
  },
});
