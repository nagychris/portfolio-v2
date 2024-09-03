<template>
    <Card>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <slot name="icon"></slot>
                    </figure>
                </div>

                <div class="media-content content">
                    <h6 class="has-text-weight-medium mb-2">
                        <slot name="title"></slot>
                    </h6>
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
