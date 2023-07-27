import selenium
from selenium.webdriver import Chrome

# Create a Chrome webdriver
driver = Chrome()

# Navigate to the website
driver.get("https://www.example.com/")

# Find the form element
form_element = driver.find_element_by_id("form_element")

# Enter text into the form element
form_element.send_keys("This is some text")

# Click the submit button
driver.find_element_by_id("submit_button").click()
