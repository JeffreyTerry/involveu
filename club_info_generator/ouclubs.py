import urllib2

thestuff = open('ouclubs.txt')
org_list = thestuff.read().split('</a><br>');
tags = {}
output = open('formatted_club_info.txt', 'w')
for org in org_list:
    org_name = org[org.index('>') + 1:]
    org_number = org[org.index('?org=') + 5:org.index('>') - 1]

    html = urllib2.urlopen('https://food.ou.edu/studentorgs/index.php?org=' + org_number).read()
    purpose_index = html.index('Purpose:</strong><p><i>')
    purpose = html[purpose_index + 23:html.index('</p>', purpose_index)]

    at_sign_index = html.index('@')
    contact_name_index = html.index('30%">') + 5;
    contact_name = html[contact_name_index:html.find('<', contact_name_index)]
    contact_email = html[html.rfind('>', 0, at_sign_index) + 1: html.find('<', at_sign_index)]

    output.write('\\org\\\\name\\' + org_name + '\\endname\\\\purpose\\' + purpose + '\\endpurpose\\\\contactname\\' + contact_name + '\\endcontactname\\\\contactemail\\' + contact_email + '\\endcontactemail\\\\endorg\\')
    print org_name, purpose, contact_name, contact_email
