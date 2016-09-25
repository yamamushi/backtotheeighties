Usage:

ez { n:#s.target_script , ez:"ez_40" }
Useful for when you just need to break the first component of an ez_* password

ez21 { n:#s.target_script }

ez35 { n:#s.target_script } 

ez40 { n:#s.target_script , t:5 }
t is an optional argument specifiying where in the primes array it should start for when you are going past your cpu time.

color { n:#s.target_script , c:"c001" }
Useful for grabbing the first component of a c00* lock.

c001 { n:#s.target_script }

c002 { n:#s.target_script }

c003 { n:#s.target_script , c:"blue"}
c is a required argument, which should contain the c001 color. You can get this with the color script.
