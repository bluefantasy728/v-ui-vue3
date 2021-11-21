export default function mixin(app) {
  app.mixin({
    data() {
      return {
        mixinVar: 'mixinVar',
      };
    },
    methods: {
      getImgSrc(url) {
        const iconUrl = new URL(url, import.meta.url);
        return iconUrl;
      },
    },
  });
}
