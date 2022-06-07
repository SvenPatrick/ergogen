module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'B'
    },
    body: p => `


(module SW_Tactile_SKHH_Angled (layer F.Cu) (tedit 5DD687FE)
  (descr "tactile switch 6mm ALPS SKHH right angle http://www.alps.com/prod/info/E/HTML/Tact/SnapIn/SKHH/SKHHLUA010.html")
  (tags "tactile switch 6mm ALPS SKHH right angle")

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
  (fp_text reference RESET (at 0 3.25 270) (layer F.SilkS)
    (effects (font (size 1 1) (thickness 0.15)))
  )

        ${''/* corner marks */}

        ${''/* pins */}

  (pad 2 thru_hole circle (at 0 6.5 180) (size 1.8 1.8	) (drill 1.2) (layers *.Cu *.Mask))
  (pad 1 thru_hole circle (at 0 0 180) (size 1.8 1.8) (drill 1.2) (layers *.Cu *.Mask))
    )

    `
}





