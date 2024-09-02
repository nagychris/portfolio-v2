<template>
    <Card>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <slot name="icon"></slot>
                    </figure>
                </div>

                <div class="media-content">
                    <p class="title is-6 has-text-weight-medium pb-1">
                        <slot name="title"></slot>
                    </p>
                    <p class="is-family-monospace subtitle is-7">
                        <slot name="year"></slot>
                    </p>
                </div>
            </div>
            <div class="content">
                <slot name="experience"></slot>
            </div>
        </div>
    </Card>
</template>
