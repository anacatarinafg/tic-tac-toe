const countries = [
    {
        "flag": "./assets/flags/af.svg",
        "name": "Afghanistan"
    },
    {
        "flag": "./assets/flags/ax.svg",
        "name": "Åland Islands"
    },
    {
        "flag": "./assets/flags/al.svg",
        "name": "Albania"
    },
    {
        "flag": "./assets/flags/dz.svg",
        "name": "Algeria"
    },
    {
        "flag": "./assets/flags/as.svg",
        "name": "American Samoa"
    },
    {
        "flag": "./assets/flags/ad.svg",
        "name": "Andorra"
    },
    {
        "flag": "./assets/flags/ao.svg",
        "name": "Angola"
    },
    {
        "flag": "./assets/flags/ai.svg",
        "name": "Anguilla"
    },
    {
        "flag": "./assets/flags/aq.svg",
        "name": "Antarctica"
    },
    {
        "flag": "./assets/flags/ag.svg",
        "name": "Antigua and Barbuda"
    },
    {
        "flag": "./assets/flags/ar.svg",
        "name": "Argentina"
    },
    {
        "flag": "./assets/flags/am.svg",
        "name": "Armenia"
    },
    {
        "flag": "./assets/flags/aw.svg",
        "name": "Aruba"
    },
    {
        "flag": "./assets/flags/au.svg",
        "name": "Australia"
    },
    {
        "flag": "./assets/flags/at.svg",
        "name": "Austria"
    },
    {
        "flag": "./assets/flags/az.svg",
        "name": "Azerbaijan"
    },
    {
        "flag": "./assets/flags/bs.svg",
        "name": "Bahamas"
    },
    {
        "flag": "./assets/flags/bh.svg",
        "name": "Bahrain"
    },
    {
        "flag": "./assets/flags/bd.svg",
        "name": "Bangladesh"
    },
    {
        "flag": "./assets/flags/bb.svg",
        "name": "Barbados"
    },
    {
        "flag": "./assets/flags/by.svg",
        "name": "Belarus"
    },
    {
        "flag": "./assets/flags/be.svg",
        "name": "Belgium"
    },
    {
        "flag": "./assets/flags/bz.svg",
        "name": "Belize"
    },
    {
        "flag": "./assets/flags/bj.svg",
        "name": "Benin"
    },
    {
        "flag": "./assets/flags/bm.svg",
        "name": "Bermuda"
    },
    {
        "flag": "./assets/flags/bt.svg",
        "name": "Bhutan"
    },
    {
        "flag": "./assets/flags/bo.svg",
        "name": "Bolivia (Plurinational State of)"
    },
    {
        "flag": "./assets/flags/bq.svg",
        "name": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "flag": "./assets/flags/ba.svg",
        "name": "Bosnia and Herzegovina"
    },
    {
        "flag": "./assets/flags/bw.svg",
        "name": "Botswana"
    },
    {
        "flag": "./assets/flags/bv.svg",
        "name": "Bouvet Island"
    },
    {
        "flag": "./assets/flags/br.svg",
        "name": "Brazil"
    },
    {
        "flag": "./assets/flags/io.svg",
        "name": "British Indian Ocean Territory"
    },
    {
        "flag": "./assets/flags/um.svg",
        "name": "United States Minor Outlying Islands"
    },
    {
        "flag": "./assets/flags/vg.svg",
        "name": "Virgin Islands (British)"
    },
    {
        "flag": "./assets/flags/vi.svg",
        "name": "Virgin Islands (U.S.)"
    },
    {
        "flag": "./assets/flags/bn.svg",
        "name": "Brunei Darussalam"
    },
    {
        "flag": "./assets/flags/bg.svg",
        "name": "Bulgaria"
    },
    {
        "flag": "./assets/flags/bf.svg",
        "name": "Burkina Faso"
    },
    {
        "flag": "./assets/flags/bi.svg",
        "name": "Burundi"
    },
    {
        "flag": "./assets/flags/kh.svg",
        "name": "Cambodia"
    },
    {
        "flag": "./assets/flags/cm.svg",
        "name": "Cameroon"
    },
    {
        "flag": "./assets/flags/ca.svg",
        "name": "Canada"
    },
    {
        "flag": "./assets/flags/cv.svg",
        "name": "Cabo Verde"
    },
    {
        "flag": "./assets/flags/ky.svg",
        "name": "Cayman Islands"
    },
    {
        "flag": "./assets/flags/cf.svg",
        "name": "Central African Republic"
    },
    {
        "flag": "./assets/flags/td.svg",
        "name": "Chad"
    },
    {
        "flag": "./assets/flags/cl.svg",
        "name": "Chile"
    },
    {
        "flag": "./assets/flags/cn.svg",
        "name": "China"
    },
    {
        "flag": "./assets/flags/cx.svg",
        "name": "Christmas Island"
    },
    {
        "flag": "./assets/flags/cc.svg",
        "name": "Cocos (Keeling) Islands"
    },
    {
        "flag": "./assets/flags/co.svg",
        "name": "Colombia"
    },
    {
        "flag": "./assets/flags/km.svg",
        "name": "Comoros"
    },
    {
        "flag": "./assets/flags/cg.svg",
        "name": "Congo"
    },
    {
        "flag": "./assets/flags/cd.svg",
        "name": "Congo (Democratic Republic of the)"
    },
    {
        "flag": "./assets/flags/ck.svg",
        "name": "Cook Islands"
    },
    {
        "flag": "./assets/flags/cr.svg",
        "name": "Costa Rica"
    },
    {
        "flag": "./assets/flags/hr.svg",
        "name": "Croatia"
    },
    {
        "flag": "./assets/flags/cu.svg",
        "name": "Cuba"
    },
    {
        "flag": "./assets/flags/cw.svg",
        "name": "Curaçao"
    },
    {
        "flag": "./assets/flags/cy.svg",
        "name": "Cyprus"
    },
    {
        "flag": "./assets/flags/cz.svg",
        "name": "Czech Republic"
    },
    {
        "flag": "./assets/flags/dk.svg",
        "name": "Denmark"
    },
    {
        "flag": "./assets/flags/dj.svg",
        "name": "Djibouti"
    },
    {
        "flag": "./assets/flags/dm.svg",
        "name": "Dominica"
    },
    {
        "flag": "./assets/flags/do.svg",
        "name": "Dominican Republic"
    },
    {
        "flag": "./assets/flags/ec.svg",
        "name": "Ecuador"
    },
    {
        "flag": "./assets/flags/eg.svg",
        "name": "Egypt"
    },
    {
        "flag": "./assets/flags/sv.svg",
        "name": "El Salvador"
    },
    {
        "flag": "./assets/flags/gq.svg",
        "name": "Equatorial Guinea"
    },
    {
        "flag": "./assets/flags/er.svg",
        "name": "Eritrea"
    },
    {
        "flag": "./assets/flags/ee.svg",
        "name": "Estonia"
    },
    {
        "flag": "./assets/flags/et.svg",
        "name": "Ethiopia"
    },
    {
        "flag": "./assets/flags/fk.svg",
        "name": "Falkland Islands (Malvinas)"
    },
    {
        "flag": "./assets/flags/fo.svg",
        "name": "Faroe Islands"
    },
    {
        "flag": "./assets/flags/fj.svg",
        "name": "Fiji"
    },
    {
        "flag": "./assets/flags/fi.svg",
        "name": "Finland"
    },
    {
        "flag": "./assets/flags/fr.svg",
        "name": "France"
    },
    {
        "flag": "./assets/flags/gf.svg",
        "name": "French Guiana"
    },
    {
        "flag": "./assets/flags/pf.svg",
        "name": "French Polynesia"
    },
    {
        "flag": "./assets/flags/tf.svg",
        "name": "French Southern Territories"
    },
    {
        "flag": "./assets/flags/ga.svg",
        "name": "Gabon"
    },
    {
        "flag": "./assets/flags/gm.svg",
        "name": "Gambia"
    },
    {
        "flag": "./assets/flags/ge.svg",
        "name": "Georgia"
    },
    {
        "flag": "./assets/flags/de.svg",
        "name": "Germany"
    },
    {
        "flag": "./assets/flags/gh.svg",
        "name": "Ghana"
    },
    {
        "flag": "./assets/flags/gi.svg",
        "name": "Gibraltar"
    },
    {
        "flag": "./assets/flags/gr.svg",
        "name": "Greece"
    },
    {
        "flag": "./assets/flags/gl.svg",
        "name": "Greenland"
    },
    {
        "flag": "./assets/flags/gd.svg",
        "name": "Grenada"
    },
    {
        "flag": "./assets/flags/gp.svg",
        "name": "Guadeloupe"
    },
    {
        "flag": "./assets/flags/gu.svg",
        "name": "Guam"
    },
    {
        "flag": "./assets/flags/gt.svg",
        "name": "Guatemala"
    },
    {
        "flag": "./assets/flags/gg.svg",
        "name": "Guernsey"
    },
    {
        "flag": "./assets/flags/gn.svg",
        "name": "Guinea"
    },
    {
        "flag": "./assets/flags/gw.svg",
        "name": "Guinea-Bissau"
    },
    {
        "flag": "./assets/flags/gy.svg",
        "name": "Guyana"
    },
    {
        "flag": "./assets/flags/ht.svg",
        "name": "Haiti"
    },
    {
        "flag": "./assets/flags/hm.svg",
        "name": "Heard Island and McDonald Islands"
    },
    {
        "flag": "./assets/flags/va.svg",
        "name": "Holy See"
    },
    {
        "flag": "./assets/flags/hn.svg",
        "name": "Honduras"
    },
    {
        "flag": "./assets/flags/hk.svg",
        "name": "Hong Kong"
    },
    {
        "flag": "./assets/flags/hu.svg",
        "name": "Hungary"
    },
    {
        "flag": "./assets/flags/is.svg",
        "name": "Iceland"
    },
    {
        "flag": "./assets/flags/in.svg",
        "name": "India"
    },
    {
        "flag": "./assets/flags/id.svg",
        "name": "Indonesia"
    },
    {
        "flag": "./assets/flags/ci.svg",
        "name": "Côte d'Ivoire"
    },
    {
        "flag": "./assets/flags/ir.svg",
        "name": "Iran (Islamic Republic of)"
    },
    {
        "flag": "./assets/flags/iq.svg",
        "name": "Iraq"
    },
    {
        "flag": "./assets/flags/ie.svg",
        "name": "Ireland"
    },
    {
        "flag": "./assets/flags/im.svg",
        "name": "Isle of Man"
    },
    {
        "flag": "./assets/flags/il.svg",
        "name": "Israel"
    },
    {
        "flag": "./assets/flags/it.svg",
        "name": "Italy"
    },
    {
        "flag": "./assets/flags/jm.svg",
        "name": "Jamaica"
    },
    {
        "flag": "./assets/flags/jp.svg",
        "name": "Japan"
    },
    {
        "flag": "./assets/flags/je.svg",
        "name": "Jersey"
    },
    {
        "flag": "./assets/flags/jo.svg",
        "name": "Jordan"
    },
    {
        "flag": "./assets/flags/kz.svg",
        "name": "Kazakhstan"
    },
    {
        "flag": "./assets/flags/ke.svg",
        "name": "Kenya"
    },
    {
        "flag": "./assets/flags/ki.svg",
        "name": "Kiribati"
    },
    {
        "flag": "./assets/flags/kw.svg",
        "name": "Kuwait"
    },
    {
        "flag": "./assets/flags/kg.svg",
        "name": "Kyrgyzstan"
    },
    {
        "flag": "./assets/flags/la.svg",
        "name": "Lao People's Democratic Republic"
    },
    {
        "flag": "./assets/flags/lv.svg",
        "name": "Latvia"
    },
    {
        "flag": "./assets/flags/lb.svg",
        "name": "Lebanon"
    },
    {
        "flag": "./assets/flags/ls.svg",
        "name": "Lesotho"
    },
    {
        "flag": "./assets/flags/lr.svg",
        "name": "Liberia"
    },
    {
        "flag": "./assets/flags/ly.svg",
        "name": "Libya"
    },
    {
        "flag": "./assets/flags/li.svg",
        "name": "Liechtenstein"
    },
    {
        "flag": "./assets/flags/lt.svg",
        "name": "Lithuania"
    },
    {
        "flag": "./assets/flags/lu.svg",
        "name": "Luxembourg"
    },
    {
        "flag": "./assets/flags/mo.svg",
        "name": "Macao"
    },
    {
        "flag": "./assets/flags/mk.svg",
        "name": "Macedonia (the former Yugoslav Republic of)"
    },
    {
        "flag": "./assets/flags/mg.svg",
        "name": "Madagascar"
    },
    {
        "flag": "./assets/flags/mw.svg",
        "name": "Malawi"
    },
    {
        "flag": "./assets/flags/my.svg",
        "name": "Malaysia"
    },
    {
        "flag": "./assets/flags/mv.svg",
        "name": "Maldives"
    },
    {
        "flag": "./assets/flags/ml.svg",
        "name": "Mali"
    },
    {
        "flag": "./assets/flags/mt.svg",
        "name": "Malta"
    },
    {
        "flag": "./assets/flags/mh.svg",
        "name": "Marshall Islands"
    },
    {
        "flag": "./assets/flags/mq.svg",
        "name": "Martinique"
    },
    {
        "flag": "./assets/flags/mr.svg",
        "name": "Mauritania"
    },
    {
        "flag": "./assets/flags/mu.svg",
        "name": "Mauritius"
    },
    {
        "flag": "./assets/flags/yt.svg",
        "name": "Mayotte"
    },
    {
        "flag": "./assets/flags/mx.svg",
        "name": "Mexico"
    },
    {
        "flag": "./assets/flags/fm.svg",
        "name": "Micronesia (Federated States of)"
    },
    {
        "flag": "./assets/flags/md.svg",
        "name": "Moldova (Republic of)"
    },
    {
        "flag": "./assets/flags/mc.svg",
        "name": "Monaco"
    },
    {
        "flag": "./assets/flags/mn.svg",
        "name": "Mongolia"
    },
    {
        "flag": "./assets/flags/me.svg",
        "name": "Montenegro"
    },
    {
        "flag": "./assets/flags/ms.svg",
        "name": "Montserrat"
    },
    {
        "flag": "./assets/flags/ma.svg",
        "name": "Morocco"
    },
    {
        "flag": "./assets/flags/mz.svg",
        "name": "Mozambique"
    },
    {
        "flag": "./assets/flags/mm.svg",
        "name": "Myanmar"
    },
    {
        "flag": "./assets/flags/na.svg",
        "name": "Namibia"
    },
    {
        "flag": "./assets/flags/nr.svg",
        "name": "Nauru"
    },
    {
        "flag": "./assets/flags/np.svg",
        "name": "Nepal"
    },
    {
        "flag": "./assets/flags/nl.svg",
        "name": "Netherlands"
    },
    {
        "flag": "./assets/flags/nc.svg",
        "name": "New Caledonia"
    },
    {
        "flag": "./assets/flags/nz.svg",
        "name": "New Zealand"
    },
    {
        "flag": "./assets/flags/ni.svg",
        "name": "Nicaragua"
    },
    {
        "flag": "./assets/flags/ne.svg",
        "name": "Niger"
    },
    {
        "flag": "./assets/flags/ng.svg",
        "name": "Nigeria"
    },
    {
        "flag": "./assets/flags/nu.svg",
        "name": "Niue"
    },
    {
        "flag": "./assets/flags/nf.svg",
        "name": "Norfolk Island"
    },
    {
        "flag": "./assets/flags/kp.svg",
        "name": "Korea (Democratic People's Republic of)"
    },
    {
        "flag": "./assets/flags/mp.svg",
        "name": "Northern Mariana Islands"
    },
    {
        "flag": "./assets/flags/no.svg",
        "name": "Norway"
    },
    {
        "flag": "./assets/flags/om.svg",
        "name": "Oman"
    },
    {
        "flag": "./assets/flags/pk.svg",
        "name": "Pakistan"
    },
    {
        "flag": "./assets/flags/pw.svg",
        "name": "Palau"
    },
    {
        "flag": "./assets/flags/ps.svg",
        "name": "Palestine, State of"
    },
    {
        "flag": "./assets/flags/pa.svg",
        "name": "Panama"
    },
    {
        "flag": "./assets/flags/pg.svg",
        "name": "Papua New Guinea"
    },
    {
        "flag": "./assets/flags/py.svg",
        "name": "Paraguay"
    },
    {
        "flag": "./assets/flags/pe.svg",
        "name": "Peru"
    },
    {
        "flag": "./assets/flags/ph.svg",
        "name": "Philippines"
    },
    {
        "flag": "./assets/flags/pn.svg",
        "name": "Pitcairn"
    },
    {
        "flag": "./assets/flags/pl.svg",
        "name": "Poland"
    },
    {
        "flag": "./assets/flags/pt.svg",
        "name": "Portugal"
    },
    {
        "flag": "./assets/flags/pr.svg",
        "name": "Puerto Rico"
    },
    {
        "flag": "./assets/flags/qa.svg",
        "name": "Qatar"
    },
    {
        "flag": "./assets/flags/xk.svg",
        "name": "Republic of Kosovo"
    },
    {
        "flag": "./assets/flags/re.svg",
        "name": "Réunion"
    },
    {
        "flag": "./assets/flags/ro.svg",
        "name": "Romania"
    },
    {
        "flag": "./assets/flags/ru.svg",
        "name": "Russian Federation"
    },
    {
        "flag": "./assets/flags/rw.svg",
        "name": "Rwanda"
    },
    {
        "flag": "./assets/flags/bl.svg",
        "name": "Saint Barthélemy"
    },
    {
        "flag": "./assets/flags/sh.svg",
        "name": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        "flag": "./assets/flags/kn.svg",
        "name": "Saint Kitts and Nevis"
    },
    {
        "flag": "./assets/flags/lc.svg",
        "name": "Saint Lucia"
    },
    {
        "flag": "./assets/flags/mf.svg",
        "name": "Saint Martin (French part)"
    },
    {
        "flag": "./assets/flags/pm.svg",
        "name": "Saint Pierre and Miquelon"
    },
    {
        "flag": "./assets/flags/vc.svg",
        "name": "Saint Vincent and the Grenadines"
    },
    {
        "flag": "./assets/flags/ws.svg",
        "name": "Samoa"
    },
    {
        "flag": "./assets/flags/sm.svg",
        "name": "San Marino"
    },
    {
        "flag": "./assets/flags/st.svg",
        "name": "Sao Tome and Principe"
    },
    {
        "flag": "./assets/flags/sa.svg",
        "name": "Saudi Arabia"
    },
    {
        "flag": "./assets/flags/sn.svg",
        "name": "Senegal"
    },
    {
        "flag": "./assets/flags/rs.svg",
        "name": "Serbia"
    },
    {
        "flag": "./assets/flags/sc.svg",
        "name": "Seychelles"
    },
    {
        "flag": "./assets/flags/sl.svg",
        "name": "Sierra Leone"
    },
    {
        "flag": "./assets/flags/sg.svg",
        "name": "Singapore"
    },
    {
        "flag": "./assets/flags/sx.svg",
        "name": "Sint Maarten (Dutch part)"
    },
    {
        "flag": "./assets/flags/sk.svg",
        "name": "Slovakia"
    },
    {
        "flag": "./assets/flags/si.svg",
        "name": "Slovenia"
    },
    {
        "flag": "./assets/flags/sb.svg",
        "name": "Solomon Islands"
    },
    {
        "flag": "./assets/flags/so.svg",
        "name": "Somalia"
    },
    {
        "flag": "./assets/flags/za.svg",
        "name": "South Africa"
    },
    {
        "flag": "./assets/flags/gs.svg",
        "name": "South Georgia and the South Sandwich Islands"
    },
    {
        "flag": "./assets/flags/kr.svg",
        "name": "Korea (Republic of)"
    },
    {
        "flag": "./assets/flags/ss.svg",
        "name": "South Sudan"
    },
    {
        "flag": "./assets/flags/es.svg",
        "name": "Spain"
    },
    {
        "flag": "./assets/flags/lk.svg",
        "name": "Sri Lanka"
    },
    {
        "flag": "./assets/flags/sd.svg",
        "name": "Sudan"
    },
    {
        "flag": "./assets/flags/sr.svg",
        "name": "Suriname"
    },
    {
        "flag": "./assets/flags/sj.svg",
        "name": "Svalbard and Jan Mayen"
    },
    {
        "flag": "./assets/flags/sz.svg",
        "name": "Swaziland"
    },
    {
        "flag": "./assets/flags/se.svg",
        "name": "Sweden"
    },
    {
        "flag": "./assets/flags/ch.svg",
        "name": "Switzerland"
    },
    {
        "flag": "./assets/flags/sy.svg",
        "name": "Syrian Arab Republic"
    },
    {
        "flag": "./assets/flags/tw.svg",
        "name": "Taiwan"
    },
    {
        "flag": "./assets/flags/tj.svg",
        "name": "Tajikistan"
    },
    {
        "flag": "./assets/flags/tz.svg",
        "name": "Tanzania, United Republic of"
    },
    {
        "flag": "./assets/flags/th.svg",
        "name": "Thailand"
    },
    {
        "flag": "./assets/flags/tl.svg",
        "name": "Timor-Leste"
    },
    {
        "flag": "./assets/flags/tg.svg",
        "name": "Togo"
    },
    {
        "flag": "./assets/flags/tk.svg",
        "name": "Tokelau"
    },
    {
        "flag": "./assets/flags/to.svg",
        "name": "Tonga"
    },
    {
        "flag": "./assets/flags/tt.svg",
        "name": "Trinidad and Tobago"
    },
    {
        "flag": "./assets/flags/tn.svg",
        "name": "Tunisia"
    },
    {
        "flag": "./assets/flags/tr.svg",
        "name": "Turkey"
    },
    {
        "flag": "./assets/flags/tm.svg",
        "name": "Turkmenistan"
    },
    {
        "flag": "./assets/flags/tc.svg",
        "name": "Turks and Caicos Islands"
    },
    {
        "flag": "./assets/flags/tv.svg",
        "name": "Tuvalu"
    },
    {
        "flag": "./assets/flags/ug.svg",
        "name": "Uganda"
    },
    {
        "flag": "./assets/flags/ua.svg",
        "name": "Ukraine"
    },
    {
        "flag": "./assets/flags/ae.svg",
        "name": "United Arab Emirates"
    },
    {
        "flag": "./assets/flags/gb.svg",
        "name": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
        "flag": "./assets/flags/us.svg",
        "name": "United States of America"
    },
    {
        "flag": "./assets/flags/uy.svg",
        "name": "Uruguay"
    },
    {
        "flag": "./assets/flags/uz.svg",
        "name": "Uzbekistan"
    },
    {
        "flag": "./assets/flags/vu.svg",
        "name": "Vanuatu"
    },
    {
        "flag": "./assets/flags/ve.svg",
        "name": "Venezuela (Bolivarian Republic of)"
    },
    {
        "flag": "./assets/flags/vn.svg",
        "name": "Viet Nam"
    },
    {
        "flag": "./assets/flags/wf.svg",
        "name": "Wallis and Futuna"
    },
    {
        "flag": "./assets/flags/eh.svg",
        "name": "Western Sahara"
    },
    {
        "flag": "./assets/flags/ye.svg",
        "name": "Yemen"
    },
    {
        "flag": "./assets/flags/zm.svg",
        "name": "Zambia"
    },
    {
        "flag": "./assets/flags/zw.svg",
        "name": "Zimbabwe"
    }
];


