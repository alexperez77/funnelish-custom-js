const coberturaData = {"AGUASCALIENTES": ["AGUASCALIENTES", "JESÚS MARÍA"], "CIUDAD DE MÉXICO": ["ÁLVARO OBREGÓN", "AZCAPOTZALCO", "BENITO JUÁREZ", "COYOACÁN", "CUAJIMALPA DE MORELOS", "CUAUHTÉMOC", "GUSTAVO A. MADERO", "IZTACALCO", "IZTAPALAPA", "LA MAGDALENA CONTRERAS", "MIGUEL HIDALGO", "TLÁHUAC", "TLALPAN", "VENUSTIANO CARRANZA", "XOCHIMILCO"], "COAHUILA DE ZARAGOZA": ["RAMOS ARIZPE", "SALTILLO"], "GUANAJUATO": ["LEÓN"], "GUERRERO": ["ACAPULCO DE JUÁREZ"], "HIDALGO": ["MINERAL DE LA REFORMA", "PACHUCA DE SOTO"], "JALISCO": ["EL SALTO", "GUADALAJARA", "PUERTO VALLARTA", "SAN PEDRO TLAQUEPAQUE", "TLAJOMULCO DE ZÚÑIGA", "TONALÁ", "ZAPOPAN"], "MORELOS": ["CUERNAVACA", "EMILIANO ZAPATA", "JIUTEPEC", "TEMIXCO"], "MÉXICO": ["ALMOLOYA DE JUÁREZ", "ATIZAPÁN", "ATIZAPÁN DE ZARAGOZA", "CALIMAYA", "CHALCO", "CHAPULTEPEC", "CHICOLOAPAN", "CHIMALHUACÁN", "COACALCO DE BERRIOZÁBAL", "CUAUTITLÁN", "CUAUTITLÁN IZCALLI", "ECATEPEC DE MORELOS", "HUIXQUILUCAN", "IXTAPALUCA", "LA PAZ", "LERMA", "MELCHOR OCAMPO", "METEPEC", "MEXICALTZINGO", "NAUCALPAN DE JUÁREZ", "NEZAHUALCÓYOTL", "TECÁMAC", "TEXCOCO", "TLALNEPANTLA DE BAZ", "TOLUCA", "TULTEPEC", "TULTITLÁN", "VALLE DE CHALCO SOLIDARIDAD", "ZINACANTEPEC", "JALTENCO", "NICOLÁS ROMERO", "SAN MATEO ATENCO", "XONACATLAN"], "NAYARIT": ["TEPIC"], "NUEVO LEÓN": ["APODACA", "GARCÍA", "GENERAL ESCOBEDO", "GUADALUPE", "MONTERREY", "SAN NICOLÁS DE LOS GARZA", "SANTA CATARINA", "SAN PEDRO GARZA GARCÍA"], "PUEBLA": ["ATLIXCO", "CUAUTLANCINGO", "PUEBLA", "SAN ANDRÉS CHOLULA", "SAN MARTÍN TEXMELUCAN", "SAN PEDRO CHOLULA", "CORONANGO", "JUAN C. BONILLA"], "QUERÉTARO": ["CORREGIDORA", "EL MARQUÉS", "QUERÉTARO"], "SAN LUIS POTOSÍ": ["SAN LUIS POTOSÍ", "SOLEDAD DE GRACIANO SÁNCHEZ"], "TLAXCALA": ["APIZACO", "CHIAUTEMPAN", "HUAMANTLA", "SANTA CRUZ TLAXCALA", "TLAXCALA", "TLAXCO", "XALOZTOC", "XALTOCAN"], "VERACRUZ DE IGNACIO DE LA LLAVE": ["BANDERILLA", "BOCA DEL RÍO", "COATEPEC", "MEDELLÍN DE BRAVO", "VERACRUZ", "XALAPA", "XICO"]};

const estadoSelect = document.querySelector(".my_dynamic_province");
const municipioSelect = document.querySelector(".my_dynamic_district");

window.addEventListener("DOMContentLoaded", () => {
  Object.keys(coberturaData).forEach(estado => {
    const opt = document.createElement("option");
    opt.value = estado;
    opt.textContent = estado;
    estadoSelect.appendChild(opt);
  });
});

estadoSelect.addEventListener("change", function () {
  const estado = this.value;
  municipioSelect.innerHTML = '<option value="">Selecciona un municipio</option>';

  if (estado && coberturaData[estado]) {
    coberturaData[estado].forEach(municipio => {
      const opt = document.createElement("option");
      opt.value = municipio;
      opt.textContent = municipio;
      municipioSelect.appendChild(opt);
    });
    municipioSelect.disabled = false;
  } else {
    municipioSelect.disabled = true;
  }
});
