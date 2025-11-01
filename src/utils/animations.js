export const animateWithGsapTimeline = (timeline, rotation, rotationState, firstTarget, secondTarget, animationProps) => {

    timeline.to(rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut"
    })

    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        }
    ),
    '<'

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        }
    ),
    '<'

}