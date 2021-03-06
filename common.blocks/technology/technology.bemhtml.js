block('technology')(
    js()(true),
    tag()(function() {
        return this.ctx.url ? 'a' : 'span';
    }),
    attrs()(function() {
       return this.ctx.url && {
            href: this.ctx.url,
            target: '_blank'
       };
    }),
    content()(function() {
        this.ctx.icon && (this.ctx.icon.mix = { block: this.block, elem: 'icon' });
        return [
            this.ctx.icon,
            {
                elem: 'text',
                content: this.ctx.text
            }
        ];
    }),
    elem('sup').tag()('sup'),
    elem('text').tag()('span')
);
