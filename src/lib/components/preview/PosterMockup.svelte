<script lang="ts">
    export let palette: Record<string, string>;
</script>

<div
    class="w-full h-[700px] rounded-xl shadow-xl overflow-hidden flex flex-col"
    style:background-color={palette.primaryContainer}
    style:color={palette.onPrimaryContainer}
>
    <!-- HERO TOP SECTION -->
    <div class="flex-1 flex flex-col items-center justify-center px-10 py-12 text-center">
        <h1 class="text-6xl font-extrabold tracking-tight mb-4"
            style:color={palette.primary}
        >
            New Color Atmosphere
        </h1>

        <p class="text-lg opacity-90 max-w-xl mb-6"
            style:color={palette.onPrimaryContainer}
        >
            Experience a refreshed visual identity with your personalized Material 3
            color scheme. Modern, bold, and adaptive — perfect for every brand.
        </p>

        <!-- CALL TO ACTION -->
        <button
            class="btn btn-lg font-bold rounded-full shadow-lg px-10 mt-4"
            style:background-color={palette.secondary}
            style:color={palette.onSecondary}
        >
            Learn More
        </button>
    </div>

    <!-- VISUAL BAR / POSTER STRIP -->
    <div class="w-full grid grid-cols-3 h-40">
        <div
            class="w-full h-full"
            style:background-color={palette.primary}
        ></div>
        <div
            class="w-full h-full"
            style:background-color={palette.secondary}
        ></div>
        <div
            class="w-full h-full"
            style:background-color={palette.tertiary}
        ></div>
    </div>

    <!-- FOOTER + PRICE BADGE -->
    <div
        class="w-full flex items-center justify-between px-10 py-6"
        style:background-color={palette.surfaceContainerHigh}
        style:color={palette.onSurface}
    >
        <p class="font-medium text-sm opacity-80">
            Powered by Material Design 3 • Adaptive Color System
        </p>

        <!-- PRICE TAG / OFFER -->
        <div
            class="px-6 py-3 rounded-full font-extrabold text-lg shadow-lg"
            style:background-color={palette.primary}
            style:color={palette.onPrimary}
        >
            Special Edition
        </div>
    </div>
</div>
