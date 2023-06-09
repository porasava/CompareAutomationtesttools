USE [ECartDB]
GO
/****** Object:  User [IIS APPPOOL\OnlinePetStore]    Script Date: 12/5/2022 1:41:54 PM ******/
CREATE USER [IIS APPPOOL\OnlinePetStore] FOR LOGIN [IIS APPPOOL\OnlinePetStore] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [IIS APPPOOL\OnlinePetStore]
GO
ALTER ROLE [db_datareader] ADD MEMBER [IIS APPPOOL\OnlinePetStore]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [IIS APPPOOL\OnlinePetStore]
GO
/****** Object:  Schema [Master]    Script Date: 12/5/2022 1:41:54 PM ******/
CREATE SCHEMA [Master]
GO
/****** Object:  Table [Master].[AdminUser]    Script Date: 12/5/2022 1:41:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Master].[AdminUser](
	[AdminId] [int] IDENTITY(1,1) NOT NULL,
	[AdminUsername] [varchar](50) NULL,
	[AdminPassword] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[IsAdmin] [bit] NULL,
 CONSTRAINT [PK_AdminUser] PRIMARY KEY CLUSTERED 
(
	[AdminId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Master].[Categories]    Script Date: 12/5/2022 1:41:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Master].[Categories](
	[CategoryId] [int] NOT NULL,
	[CategoryCode] [varchar](150) NOT NULL,
	[CategoryName] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Categories1] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Master].[CustomerUser]    Script Date: 12/5/2022 1:41:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Master].[CustomerUser](
	[CustomerId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[UserName] [varchar](50) NULL,
	[Password] [varchar](50) NULL,
	[Email] [varchar](50) NULL,
 CONSTRAINT [PK_CustomerUser] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Master].[Items]    Script Date: 12/5/2022 1:41:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Master].[Items](
	[ItemId] [uniqueidentifier] NOT NULL,
	[CategoryId] [int] NOT NULL,
	[ItemCode] [varchar](50) NOT NULL,
	[ItemName] [nvarchar](250) NOT NULL,
	[Description] [nvarchar](250) NULL,
	[ImagePath] [nvarchar](550) NOT NULL,
	[ItemPrice] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_Items] PRIMARY KEY CLUSTERED 
(
	[ItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [Master].[AdminUser] ON 

INSERT [Master].[AdminUser] ([AdminId], [AdminUsername], [AdminPassword], [Email], [FirstName], [LastName], [IsAdmin]) VALUES (1, N'Tananya', N'Tanya123', N'por@123.com', N'Tanya', N'Tanya', NULL)
INSERT [Master].[AdminUser] ([AdminId], [AdminUsername], [AdminPassword], [Email], [FirstName], [LastName], [IsAdmin]) VALUES (2, N'Tananya1', N'1111', N'Tanya1@hotmail.com', N'Tananya', N'Asavaoran', NULL)
SET IDENTITY_INSERT [Master].[AdminUser] OFF
INSERT [Master].[Categories] ([CategoryId], [CategoryCode], [CategoryName]) VALUES (7, N'Beds001', N'Beds Cat')
INSERT [Master].[Categories] ([CategoryId], [CategoryCode], [CategoryName]) VALUES (8, N'Blows', N'Blows')
INSERT [Master].[Categories] ([CategoryId], [CategoryCode], [CategoryName]) VALUES (9, N'Dog Collars', N'Dog Collars')
INSERT [Master].[Categories] ([CategoryId], [CategoryCode], [CategoryName]) VALUES (10, N'Dog Toys', N'Dog Toys')
INSERT [Master].[Categories] ([CategoryId], [CategoryCode], [CategoryName]) VALUES (11, N'Flea & Worm Products', N'Flea & Worm Products')
INSERT [Master].[Categories] ([CategoryId], [CategoryCode], [CategoryName]) VALUES (12, N'Grooming', N'Grooming')
INSERT [Master].[Categories] ([CategoryId], [CategoryCode], [CategoryName]) VALUES (13, N'Health Products', N'Health Products')
INSERT [Master].[Categories] ([CategoryId], [CategoryCode], [CategoryName]) VALUES (14, N'Vet only Diets', N'Vet only Diets')
SET IDENTITY_INSERT [Master].[CustomerUser] ON 

INSERT [Master].[CustomerUser] ([CustomerId], [FirstName], [LastName], [UserName], [Password], [Email]) VALUES (1, N'Tananya', N'Asavaoran', N'Tanya123', N'Tanya1234', N'Tanya@hotmail.com')
SET IDENTITY_INSERT [Master].[CustomerUser] OFF
INSERT [Master].[Items] ([ItemId], [CategoryId], [ItemCode], [ItemName], [Description], [ImagePath], [ItemPrice]) VALUES (N'e06b41c1-de2b-4095-88f1-375faa634994', 9, N'Dog Collars 001', N'Shine for Dogs', N'USB Rechargeable LED Dog Collar - Disco', N'~/Images/beebbce3-1683-436a-983e-8b3a1a1647d2.jpg', CAST(25.00 AS Decimal(18, 2)))
INSERT [Master].[Items] ([ItemId], [CategoryId], [ItemCode], [ItemName], [Description], [ImagePath], [ItemPrice]) VALUES (N'd81a3ec6-3447-4465-8e64-3e1908b7a654', 7, N'Bed Cat 002', N'Polka Dot Pet Tent', N'Polka Dot Pet Tent', N'~/Images/d0c8723d-f7b9-44fb-8873-62a215256ad2.jpg', CAST(21.00 AS Decimal(18, 2)))
INSERT [Master].[Items] ([ItemId], [CategoryId], [ItemCode], [ItemName], [Description], [ImagePath], [ItemPrice]) VALUES (N'd4f9772b-fd8c-441c-8df2-4fc181944aaa', 7, N'Bed Cat 001', N'Cat Hammock', N'Summer Two Storey Cat Hammock', N'~/Images/c60c1763-c8eb-410e-bfec-51283f3b227f.jpg', CAST(20.00 AS Decimal(18, 2)))
INSERT [Master].[Items] ([ItemId], [CategoryId], [ItemCode], [ItemName], [Description], [ImagePath], [ItemPrice]) VALUES (N'd38d0b97-fe1d-42cf-bf10-d8a4d60dcbd5', 10, N'Dog toy 001', N'Treat Dispensing Tumbler', N'Treat Dispensing Tumbler', N'~/Images/e40fe274-ed24-4cab-8ba3-94b9938235a5.jpg', CAST(25.00 AS Decimal(18, 2)))
INSERT [Master].[Items] ([ItemId], [CategoryId], [ItemCode], [ItemName], [Description], [ImagePath], [ItemPrice]) VALUES (N'f2a7d0d5-456f-4d24-b419-e94e794190a7', 12, N'Grooming 001', N'FURminator', N'FURminator Medium Dog DeShedding Tool', N'~/Images/5771f10b-3723-4b1c-8a82-7ae94dcf3478.jpg', CAST(100.00 AS Decimal(18, 2)))
INSERT [Master].[Items] ([ItemId], [CategoryId], [ItemCode], [ItemName], [Description], [ImagePath], [ItemPrice]) VALUES (N'5777504d-4649-4fcc-b6c1-fcae8859106d', 13, N'Health Product 001', N'Bravecto', N'Cat bravecto plus Spot-on for Medium Cats 2.8 - 6.25kg', N'~/Images/2f04c48b-0500-4442-a291-ccd857ee1766.jpg', CAST(60.00 AS Decimal(18, 2)))
