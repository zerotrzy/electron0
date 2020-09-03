require 'native'

class MojPrzycisk
 NAZWA = 'zapewne' #globalna nazwa

  def initialize(start='Program w Ruby')
    $$.write("<button onclick=\"#{SuperID::NAZWA}_button()\">#{start}<\/button>")
    $$.write('<p id="przyciskruby">Wynik przycisku</p>')
    @element = $$.getElementByID(id)
  end
  def zapewne_button
    @element.innerHTML = "Kliknieto przycisk";
  end
  def clear
    @element.innerText = ""
  end
  def puts(text)
    @element.innerText = text
  end
end
