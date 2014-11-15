from pymongo import MongoClient

db = MongoClient()['Involveu-development']
groups = db.groups
club_file = open('formatted_club_info.txt')
clubs = club_file.read()

club_index = clubs.index('\\org\\') + 5
while club_index != -1:
    name = clubs[clubs.index('\\name\\', club_index) + 6:clubs.index('\\endname\\', club_index)]
    purpose = clubs[clubs.index('\\purpose\\', club_index) + 9:clubs.index('\\endpurpose\\', club_index)]
    contactname = clubs[clubs.index('\\contactname\\', club_index) + 13:clubs.index('\\endcontactname\\', club_index)]
    contactemail = clubs[clubs.index('\\contactemail\\', club_index) + 14:clubs.index('\\endcontactemail\\', club_index)]
    groups.insert({'name': name, 'purpose': purpose, 'contactemail': contactemail, 'contactname': contactname})
    print name, purpose, contactname, contactemail
    if club_index + 1 < len(clubs):
        club_index = clubs.index('\\org\\', club_index + 1)



