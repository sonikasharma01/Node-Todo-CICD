resource "aws_instance" "instance" {
  ami           = "ami-01a00762f46d584a1"
  instance_type = "t3.micro"

  subnet_id = aws_subnet.subnet.id

  vpc_security_group_ids = [
    aws_security_group.security_group.id
  ]

  associate_public_ip_address = true

  key_name = aws_key_pair.key-pair.key_name

  iam_instance_profile = aws_iam_instance_profile.ec2_profile.name

  tags = {
    Name = "${var.project_name}-ec2"
  }
}

# Key-Pair
resource "aws_key_pair" "key-pair" {
  key_name   = "ec2-key"
  public_key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIPsobrC2pu0AAog3LDoJKJSCb0b6iJia5szltzTw8J0 hp@sonika"
}
